FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY Api/Api.csproj Api/
COPY Application/Application.csproj Application/
COPY Domain/Domain.csproj Domain/
COPY Infrastructure/Infrastructure.csproj Infrastructure/

RUN dotnet restore Api/Api.csproj

COPY Api/ Api/
COPY Application/ Application/
COPY Domain/ Domain/
COPY Infrastructure/ Infrastructure/

RUN dotnet publish Api/Api.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "Api.dll"]
