
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from routers.countries_router import router
from uvicorn import run
app = FastAPI()

app.include_router(router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
if __name__ == '__main__':
    run(app=app)
