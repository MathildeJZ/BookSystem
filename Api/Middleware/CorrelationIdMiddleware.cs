namespace Infrastructure.Middleware;

public class CorrelationIdMiddleware
{
    private readonly RequestDelegate _next;

    public CorrelationIdMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        // Prøv at hente correlation ID fra request headers
        if (!context.Request.Headers.TryGetValue("X-Correlation-ID", out var correlationId))
        {
            correlationId = Guid.NewGuid().ToString();
        }

        // Gem ID i HttpContext
        context.Items["CorrelationId"] = correlationId;

        // Send ID tilbage i response headers
        context.Response.Headers["X-Correlation-ID"] = correlationId;

        await _next(context);
    }
}
