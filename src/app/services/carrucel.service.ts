import { Injectable } from '@angular/core';
import { addDoc,collection,deleteDoc,doc,getDocs,updateDoc} from 'firebase/firestore';
import { db } from '../config/firebase';



@Injectable({
  providedIn: 'root'
})

export class CarrucelService {

   async getCarrusel() {

    const carrucelRef = collection(db, 'carrucel');

    const snapshot = await getDocs(carrucelRef);

    return snapshot.docs.map(doc => ({
      docId: doc.id,
      ...doc.data()
    }));

  }
 

  async agregarCarrucel(
    id: number,
    imagen: string
  ) {

    const carrucelRef = collection(
      db,
      'carrucel'
    );

    await addDoc(carrucelRef, {
      id,
      imagen
    });

  }


  // =========================
  // OBTENER
  // =========================

  async obtenerCarrucel() {

    const carrucelRef = collection(
      db,
      'carrucel'
    );

    const snapshot = await getDocs(
      carrucelRef
    );

    return snapshot.docs.map(documento => ({

      docId: documento.id,

      ...documento.data()

    }));

  }


  // =========================
  // ELIMINAR
  // =========================

  async eliminarCarrucel(
    docId: string
  ) {

    const carrucelRef = doc(
      db,
      'carrucel',
      docId
    );

    await deleteDoc(carrucelRef);

  }


  // =========================
  // EDITAR
  // =========================

  async editarCarrucel(
    docId: string,
    id: number,
    imagen: string
  ) {

    const carrucelRef = doc(
      db,
      'carrucel',
      docId
    );

    await updateDoc(carrucelRef, {

      id,
      imagen

    });

  }


}