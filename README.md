<h1 align="center">
  AuctionArena
</h1>
A comprehensive auction platform using the MERN stack for the Business Plan event, enabling auctioneers 
and teams to track budgets and expenses in real time.


<h3>
  Block Diagram
</h3>

![Screenshot 2024-07-31 002453](https://github.com/user-attachments/assets/38ce341f-fa97-4576-83c5-ae6168bdbb9c)


**Admin:**

- Represents the administrator of the auction platform.
- Interacts with the backend to manage auction-related tasks.
- Has a bidirectional communication flow with the backend.

**Team:**

- Represents the teams participating in the auction.
- Each team interacts with the backend to track own Budget as well as other team Budgets.
- Has a one directional communication flow with the backend.

**Backend:**

- Central component managing the auction process.
- Handles requests from both the admin and the teams.
- Manages the auction logic and maintains the current state of the auction.
- Communicates with MongoDB to store and retrieve auction data.

**MongoDB:**

- Database used to store auction-related data such as company details, and team information.
- Communicates with the backend to perform data operations.

**Users (m and n):**

- Represents multiple instances of admin users (m) and team users (n).
- Interact with their respective interfaces (Admin or Team) which communicate with the backend.

<h3>
  Snapshots
</h3>

![welcome](https://github.com/user-attachments/assets/4c5d7b67-81ed-4615-916b-c736a5cc2bac)

![adminPortal](https://github.com/user-attachments/assets/4019aa3b-e264-4c4d-9c72-b566bbc89c1e)

![sellCompany](https://github.com/user-attachments/assets/24af324e-1774-495d-9f7a-735dc69250f0)

![companies](https://github.com/user-attachments/assets/66582a29-3568-463e-a952-fba1b84a484d)

![userDashboard](https://github.com/user-attachments/assets/81959fb6-4019-4b9c-8025-ca6d7b417510)


Thank you.
