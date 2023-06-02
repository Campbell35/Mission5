FROM node:18-alpine

# Copy the entire current directory to the image
COPY . .

# Need to install node
RUN npm install

# Need to build the files
RUN npm run build

# Expose port 3001 for the server
EXPOSE 3002

# Run the start command (npm run dev in this case)
CMD npm run dev
