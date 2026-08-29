import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from 'firebase/firestore';
import { db } from '../config/firebase';

@Injectable({
  providedIn: 'root',
})
export class Combos {

  async agregarCombo(
  id: number,
  nombre: string,
  imagen: string,
  baseId: string,
  colchonId: string,
  espaldarId: string,
  precio: number,
  descripcion: string
) {

  const combosRef = collection(db, 'combos');

  await addDoc(combosRef, {
    id,
    nombre,
    imagen,
    baseId,
    colchonId,
    espaldarId,
    precio,
    descripcion
  });

  alert('Combo guardado');

}

  async obtenerCombo() {

    const combosRef = collection(db, 'combos');

    const snapshot = await getDocs(combosRef);

    return snapshot.docs.map(doc => ({
      docId: doc.id,
      ...doc.data()
    }));

  }

  async editarCombo(
  docId: string,
  id: number,
  nombre: string,
  imagen: string,
  baseId: string,
  colchonId: string,
  espaldarId: string,
  precio: number,
  descripcion: string
) {

  const comboRef = doc(db, 'combos', docId);

  await updateDoc(comboRef, {
    id,
    nombre,
    imagen,
    baseId,
    colchonId,
    espaldarId,
    precio,
    descripcion
  });

}


async eliminarCombo(docId: string) {

  const comboRef = doc(db, 'combos', docId);

  await deleteDoc(comboRef);

}

  
}
