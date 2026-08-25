using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Middleware;

public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task Invoke(HttpContext context)
    {
        var requestId = Guid.NewGuid().ToString();
        context.Items["RequestId"] = requestId;

        var stopwatch = Stopwatch.StartNew();

        _logger.LogInformation("Incoming request {RequestId}: {Method} {Path}",
            requestId, context.Request.Method, context.Request.Path);

        await _next(context);

        stopwatch.Stop();

        _logger.LogInformation("Completed request {RequestId}: {StatusCode} in {Elapsed}ms",
            requestId, context.Response.StatusCode, stopwatch.ElapsedMilliseconds);
    }
}
