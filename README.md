# Front end of the project Procurement Dasboard
## Problem :
Generates a dashboard project to consume the procurement data.
## Solution Approach:
Creating a dashboard from the collected data in an easy-to-understand and meaningful way for the users. 

Angular Material and ng2-charts and the advantage of schematics to cut down the effort and time you may spend building a dashboard.

This illustrates how to build a dashboard, from government procurement data.
## Explanation
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

docker build -t procurement_dash:latest .

replace the value of API_HOST acording to the docker bridge of the backend 
https://github.com/softdevgge/procurementAPI


docker run -e API_HOST="172.17.0.3" -p 80:80 engagement_dash:latest

