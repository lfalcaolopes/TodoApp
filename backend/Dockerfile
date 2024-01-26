# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /source
COPY . .
RUN dotnet restore "./TodoApp.API/TodoApp.API.csproj" --disable-parallel
RUN dotnet ef database update --project "./TodoApp.API/TodoApp.API.csproj" --context TodoAppDbContext
RUN dotnet publish "./TodoApp.API/TodoApp.API.csproj" -c release -o /app --no-restore

# Serve Stage
FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal
WORKDIR /app
COPY --from=build /app ./

EXPOSE 5000

ENTRYPOINT ["dotnet", "TodoApp.API.dll"]