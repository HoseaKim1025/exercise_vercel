// 임시 코드 작성 입니다.

// firebase 임시 코드 주석으로 처리

// import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
// import { firestore } from 'apis/firebaseService';

// export const getNotifications = async (params: {
//   queryKey: [string, string];
// }) => {
//   const uid = params.queryKey[1];
//   const docRef = collection(firestore, `notifications`);
//   const q = query(docRef, where('uid', '==', uid), orderBy('date', 'desc'));
//   const querySnapshot = await getDocs(q);
//   const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//   return docs;
// };
