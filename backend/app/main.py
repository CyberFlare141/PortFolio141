from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.exc import OperationalError
import time

from app.database import engine, Base
from app.routes import projects

def init_db():
    retries = 10
    while True:
        try:
            Base.metadata.create_all(bind=engine)
            break
        except OperationalError:
            retries -= 1
            if retries <= 0:
                raise RuntimeError("Could not connect to the database after several retries")
            time.sleep(3)

app = FastAPI(title="Masrafi's Portfolio API")

app.add_event_handler("startup", init_db)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)


@app.get("/")
def root():
    return {"message": "Portfolio API is live"}