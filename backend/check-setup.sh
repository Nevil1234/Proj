#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔍 Checking Backend Setup...${NC}\n"

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} Dependencies installed"
else
    echo -e "${RED}✗${NC} Dependencies not installed"
    echo -e "  ${YELLOW}→ Run: npm install${NC}"
fi

# Check if .env exists
if [ -f ".env" ]; then
    echo -e "${GREEN}✓${NC} .env file exists"
    
    # Check if DATABASE_URL is configured
    if grep -q "postgresql://username:password@host:port" .env; then
        echo -e "${RED}✗${NC} DATABASE_URL not configured"
        echo -e "  ${YELLOW}→ Update DATABASE_URL in .env with your Railway PostgreSQL URL${NC}"
    else
        echo -e "${GREEN}✓${NC} DATABASE_URL appears to be configured"
    fi
else
    echo -e "${RED}✗${NC} .env file missing"
    echo -e "  ${YELLOW}→ Copy .env.example to .env${NC}"
fi

# Check if Prisma Client is generated
if [ -d "node_modules/@prisma/client" ]; then
    echo -e "${GREEN}✓${NC} Prisma Client generated"
else
    echo -e "${RED}✗${NC} Prisma Client not generated"
    echo -e "  ${YELLOW}→ Run: npm run prisma:generate${NC}"
fi

# Check if schema.prisma exists
if [ -f "prisma/schema.prisma" ]; then
    echo -e "${GREEN}✓${NC} Prisma schema exists"
else
    echo -e "${RED}✗${NC} Prisma schema missing"
fi

echo -e "\n${BLUE}📋 Next Steps:${NC}"
echo -e "1. Update DATABASE_URL in .env with your Railway PostgreSQL connection string"
echo -e "2. Run: ${GREEN}npm run prisma:push${NC} (to create tables in database)"
echo -e "3. Run: ${GREEN}npm run prisma:seed${NC} (optional - adds sample data)"
echo -e "4. Run: ${GREEN}npm run dev${NC} (to start the server)"
echo -e "\n${BLUE}📚 See QUICKSTART.md for detailed instructions${NC}"
