from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional


class ProjectBase(BaseModel):
    title: str
    description: str
    tech_stack: str
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None


class ProjectCreate(ProjectBase):
    pass


class ProjectOut(ProjectBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactOut(ContactCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True