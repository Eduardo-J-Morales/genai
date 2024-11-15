from config import db 

class Contact(db.Model):
    id = db.Column(db.Interger, primary_key=True)
    first_name = db.column(db.String(80), unique=False, nullable=False)
    last_name = db.column(db.string(80), unique=False, nullable=False)
    
    def to_json(self):
        