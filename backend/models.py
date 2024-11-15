from config import db 

class Contact(db.Model):
    id = db.Column(db.Interger, primary_key=True)
    first_name = db.column(db.String(80), unique=False, nullable=False)
    last_name = db.column(db.string(80), unique=False, nullable=False)
    
    def to_json(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
        }
