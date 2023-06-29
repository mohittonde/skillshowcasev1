FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
ARG NUGET_USERNAME
ARG NUGET_PASSWORD

ENV NUGET_USERNAME=${NUGET_USERNAME}
ENV NUGET_PASSWORD=${NUGET_PASSWORD}

# Adds this source with basic authentication, other authentication types exist but I'm not sure if they are applicable here in Linux based container
RUN dotnet nuget add source "https://nuget.pkg.github.com/mohittonde/index.json" --name="github" --username ${NUGET_USERNAME} --valid-authentication-types basic --store-password-in-clear-text --password ${NUGET_PASSWORD}
WORKDIR /src
COPY ["Api.csproj", "."]
RUN dotnet restore "./Api.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Api.csproj" -c Release -o /app/publish

FROM base as final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet","Api.dll"]
