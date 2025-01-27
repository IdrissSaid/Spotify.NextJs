import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI || '';

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('Connexion MongoDB déjà établie.');
    return;
  }

  try {
    console.log(`Connexion à la base de données via Mongoose...`);
    await mongoose.connect(uri);
    console.log(`Connexion à la base de données réussie`);
  } catch (error) {
    console.error(`Erreur de connexion à la base de données:`, error);
    throw new Error('Impossible de se connecter à la base de données');
  }
};

declare global {
  var mongoose: typeof mongoose | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global.mongoose) {
    global.mongoose = mongoose;
  }
}

export { connectToDatabase };
