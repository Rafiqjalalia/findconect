
import { User, Message, Gift } from './types';

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Sarah', age: 22, location: 'Los Angeles', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApvAxSuqTQ1pErC4oGhPeiwJlgLGknuMAjkpvE4yqueNd9XuYXTtJ1ZDMBoTFT-bCz0mE0oiX-8NiHg-w6tBlF6tsalKmAjvZbNDyoSC8gster6llCeRyMf3aW4wlR3Ul_Ee-85XUcT6nYaG6UmRC7QaS_I1y-NJDnUkQPklGI1EsAm2KhXglNrPh3GbFXFLbYJOQ7-4Y88zWtJWhChithZmmjU-B--cZZRUmo0AeesnXOPT12qMSV8l1pIJK1NkC-v410wP8qmG8x', isOnline: true, isLive: false },
  { id: '2', name: 'Mike', age: 25, location: 'New York', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0JZf2e8HFnFpvRf4PnQ35p0t9UmzE1LCcR7eNDkbjQTj4pwWuusFW3XwkeBUSW7JHIF7YB5zvZCKkf7Pa95br2FHmSltOtVnFSX_eEEyZVZUMASMdLMY1UGk1KBbrCM-I-m7Jf0eJezJ0x5ccrozbQVY-aLQSxNzKX7q59wQBsLwX7viWMO3FaMZlP_-jFer0w9a2E11vfZgLuf8X3ScpRT0ArCki1Srtc_xKkWl4cYFdaB1Wve90fQ0lyf-chWuyZcd3yO2YjIjc', isOnline: true, isLive: true },
  { id: '3', name: 'Elena', age: 21, location: 'Chicago', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFB7eeQbYGiRsMDFRtUTJ_xTUWwcOEdxgzRNxE71xEVxK-zE3sLUN4uNbaz57lKMeE5hOblwR5Opupp1FgAv_CQbZ6Bj24ookJtwZCEm2xzNA294W4Q7DuBIkz3Q8Y6O-34QOoV8Wxhda1JWKUnhgR3PToABFlUONLAENiHU_YcyY5ZvRzFOVkyCvIhE54hrQ2QNOE2RVUn3TD4B4tGH6y55BSi0tcvHfSzNMsB65ennvnBd5Xk_V515sCHVf-NHkdsz7hbxT6lq1N', isOnline: false, isLive: false },
  { id: '4', name: 'David', age: 24, location: 'Austin', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLYCgCEIgslRe-OpeSa1WyPSr5fR9QIyf51Kxu33_7Ovs7hV34eMVDaX9TVQ17qWxI_-dABUy_KIvVrfJfWtBucM4alMwgB6AGqw_VrVMw4GOZW56B2qd0NogKJ3whN7T15rlZfnVdU23XAF9kFa_rpd5hBOw03vm7UTEAQpFi4EqUWkea-JRBnGj59A-6E4ny9OHLz1uU6yUp2Rx7_hAv0H8jXTnbNyhKGNInE4-8qknCtbhMGbXKS8GNJAw-4-teyu5aVgBGBHtJ', isOnline: false, isLive: false },
  { id: '5', name: 'Jessica', age: 23, location: 'Miami', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9IR5Bt7ZHLfT0RkXIiBHyY_jj_v8xTO3wJaf_OYTrB8S5QBfjw7SrFYVzWDjE27K82hFL0OmMdkJ2KjF8pXy0sfq1n1M24G56mwoo-hkWmQht9almA0RgzVvm4bcegSFwO0u4L3ETYcOBmqqkkJ2A2Cgqb1fhVD03ZgVk25cp50AS7hxlMguNaWFDutDWqJNp91PSyEVgL0JvyHVIA6HHRdi-5Y_1D1WGgRhyY_AdyFSOHyzK_SbO7OiKgyPQ-1aavFWalfJVNw1Z', isOnline: false, isLive: false },
  { id: '6', name: 'Alex', age: 22, location: 'Seattle', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0wc1JRy-0GbZ3yPkONSxwO3B1QKY4sLvW4veSe_wnUq1IdV7qOYs3EPhehvQmVoR3lGl0C5keuo75tOAci7mnB4QqaIIxUz2IopCRd5rQ6krggiQ1S61isVu7aThCoJap0LLMG1jLxmZC6EomZiUa_Q6EKwnnCfdCscBL00Y0bRren9z5icklsh0IQ4R2pm598QZAbUvE0sUpdhAgB31eGqAYLFd7J00EEpcTIRIKaBPBSipQyJPtC3i0tMDK-4XaSwJ8tUPAuXgN', isOnline: true, isLive: false }
];

export const MOCK_MESSAGES: Message[] = [
  { id: '1', user: { name: 'Sarah Miller', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnoJneRQOD_QEnQIfwTzDXlxSzELRUuUWXrMyhXOEm3pZeKfAGAFTTHnpw_DwDx5-lsOyDIB1wNXk7gtVfV4eX5sVPOh85yOlo9ckEw5yfOUf78DyS5oAi9RNYEtWNilGA4IlgzHVFZ73N2ppzKyU7ruMTzHilKldRoQpXm2Qu-Ycr-AQu-tyaREkPCLVqaooE5V9wWzwqgkLfpQk4xxYdcPUMOGcKCJPZE3-Q8dEN2oDZklxQD3JFVHamfpavpEcVcVuJMCsDs-eQ' }, lastMessage: 'Hey! Are you free for a quick voice chat? 🎤', time: 'Just now', unreadCount: 2 },
  { id: '2', user: { name: 'Jason Wong', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv9hvGG6Zno8Vds5BeyBzNjQYPudHEPoDG2mcQfrp6CAQhd5k1hleiGJUUyYO_0d0TK71XU9TKtSHwr9P3-DNW6zgzNxWHVhVfEt72fFFlHCfsg4_3pmmSBR2SshHIYoQ6naiKULvJ-KRfdhsnuDc2LhDwQcAVgy0pZr7R6439PmMsX1XvCDl1mJ6RdwHXGpCy69Qt-cuYUfnn1kuY35XWEDfZw-EuZbCA7LSopEKWI6eEw4Vs9fDMLyjmbDYgpsL9xGcW_HUnWSkE' }, lastMessage: "That was a great chat! Let's talk again soon. 🔥", time: '15m ago' },
  { id: '3', user: { name: 'System Support' }, lastMessage: 'Your daily reward of 50 coins is ready! 💰', time: '1h ago', isSystem: true },
  { id: '4', user: { name: 'Emma Davis', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9m3_ZHHgcDYH-n1Pe40vjlC2Hb4WiQnzHGwJMLY2T4RvKZiSKS0lS8gw-gcKz4r2ZJx7vVJf-ImvrLhNQspkvkzO8saa3b920FxH-1Ko-IHtsEg7Skb21aMY-kkGRaF0cZeMu7fGxUldI3JirJ7jHwvanei-hVicXiVm1XAX5Wa1leSuYGyznEutQGHlxi1B-qFdw9ascEf4prNM4A4QkNfsGrFdMR1bkEnWEn2l88wxKU65k1jdOu7hg7skESSNugwUGF4vNsVnM' }, lastMessage: 'Sent a photo', time: '3h ago' }
];

export const GIFTS: Gift[] = [
  { id: 'g1', name: 'Heart', icon: 'favorite', price: 50, color: 'text-red-500' },
  { id: 'g2', name: 'Fire', icon: 'local_fire_department', price: 100, color: 'text-orange-500' },
  { id: 'g3', name: 'Party', icon: 'celebration', price: 200, color: 'text-pink-400' },
  { id: 'g4', name: 'Gem', icon: 'diamond', price: 500, color: 'text-blue-400' }
];
