# BookSystem 
Et fuldstack projekt bygget med Angular, .NET, Docker, Azure Container Apps og Azure Static Web Apps.

## System Architecture
![Architecture](docs/architecture.png)

## Tech Stack

### Frontend
- Angular 17
- TypeScript
- Azure Static Web Apps

### Backend
- .NET 8 Web API
- Clean Architecture (Controllers → Services → Infrastructure → Repositories)
- EF Core
- Docker
- Azure Container Apps

### Database
- Azure PostgreSQL Flexible Server

### CI/CD
- GitHub Actions
- Pipeline 1: Build .NET → Docker → Deploy to Azure Container Apps  
- Pipeline 2: Build Angular → Deploy to Azure Static Web Apps

### Cloud
- Azure Container Apps
- Azure StaticWeb Apps
- Azure PostgreSQL
---

## Features
- Opret, rediger og slet bøger
- Håndtering af forfattere og kategorier
- API med Clean Architecture
- Containerized backend
- Cloud‑hosted frontend og backend
- PostgreSQL database i Azure

---

### Solution structure

## Domain
- Entities
- Value Objects
- Interfaces for repositories

## Application
- Commands
- Queries
- Handlers
-  Interfaces for repositories
- DTO´s and validation

## Infrastructure
- EF Core DBContext
- Repository-implementations
- Database migrations
- Azure-Integrations

## Api
- Controllers
- Endpoints
- Dependency Injections
- Programs.cs


