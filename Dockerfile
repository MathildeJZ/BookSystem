# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY Api/Api.csproj Api/
COPY Domain/Domain.csproj Domain/
COPY Application/Application.csproj Application/
COPY Infrastructure/Infrastructure.csproj Infrastructure/

RUN dotnet restore Api/Api.csproj

COPY . .

RUN dotnet publish Api/Api.csproj -c Release -o /app

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .

EXPOSE 5000
ENV ASPNETCORE_URLS=http://+:5000

ENTRYPOINT ["dotnet", "Api.dll"]
