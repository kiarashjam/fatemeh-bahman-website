#!/bin/bash
# Azure deployment script
# This script helps create Azure resources via Azure CLI

echo "🚀 Setting up Azure resources for Fatemeh Bahman website..."

# Configuration
RESOURCE_GROUP="fatemeh-bahman-rg"
LOCATION="northeurope"  # North Italy
APP_SERVICE_PLAN="fatemeh-bahman-plan"
WEB_APP_NAME="fatemeh-bahman-website"

# Check if logged in
echo "Checking Azure login..."
az account show > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "Please login to Azure first:"
    echo "az login"
    exit 1
fi

# Create resource group
echo "Creating resource group: $RESOURCE_GROUP in $LOCATION..."
az group create \
  --name $RESOURCE_GROUP \
  --location $LOCATION

# Create App Service Plan (Free tier)
echo "Creating App Service Plan (Free tier)..."
az appservice plan create \
  --name $APP_SERVICE_PLAN \
  --resource-group $RESOURCE_GROUP \
  --sku FREE \
  --is-linux

# Create Web App
echo "Creating Web App: $WEB_APP_NAME..."
az webapp create \
  --resource-group $RESOURCE_GROUP \
  --plan $APP_SERVICE_PLAN \
  --name $WEB_APP_NAME \
  --runtime "NODE:20-lts"

# Configure Node version
echo "Configuring Node.js version..."
az webapp config appsettings set \
  --resource-group $RESOURCE_GROUP \
  --name $WEB_APP_NAME \
  --settings WEBSITE_NODE_DEFAULT_VERSION="~20"

# Set startup command
echo "Setting startup command..."
az webapp config set \
  --resource-group $RESOURCE_GROUP \
  --name $WEB_APP_NAME \
  --startup-file "npm start"

echo "✅ Azure resources created successfully!"
echo ""
echo "Next steps:"
echo "1. Get publish profile: az webapp deployment list-publishing-profiles --name $WEB_APP_NAME --resource-group $RESOURCE_GROUP"
echo "2. Add publish profile to GitHub Secrets as AZURE_WEBAPP_PUBLISH_PROFILE"
echo "3. Push to GitHub to trigger deployment"
echo ""
echo "Your app will be available at: https://$WEB_APP_NAME.azurewebsites.net"
