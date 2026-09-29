export const IMAGES = {
  heroKaaba: 'https://images.pexels.com/photos/26436662/pexels-photo-26436662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  heroKaabaAlt: 'https://images.pexels.com/photos/31339194/pexels-photo-31339194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kaabaPilgrims: 'https://images.pexels.com/photos/27490072/pexels-photo-27490072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kaabaAerial: 'https://images.pexels.com/photos/35315919/pexels-photo-35315919.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  kaabaPilgrims2: 'https://images.pexels.com/photos/5620451/pexels-photo-5620451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  madinahMosque: 'https://images.pexels.com/photos/17261869/pexels-photo-17261869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  madinahMinarets: 'https://images.pexels.com/photos/33169789/pexels-photo-33169789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  madinahDome: 'https://images.pexels.com/photos/18360295/pexels-photo-18360295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  fleet: {
    sedan: 'https://images.pexels.com/photos/25691109/pexels-photo-25691109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    suv: 'https://images.pexels.com/photos/19868893/pexels-photo-19868893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    luxury: 'https://images.pexels.com/photos/12066299/pexels-photo-12066299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    van: 'https://images.pexels.com/photos/39075475/pexels-photo-39075475.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  routes: {
    'makkah-route': 'https://images.pexels.com/photos/26436662/pexels-photo-26436662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'madinah-route': 'https://images.pexels.com/photos/17261869/pexels-photo-17261869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'madinah-airport': 'https://images.pexels.com/photos/18360295/pexels-photo-18360295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'taif-route': 'https://images.pexels.com/photos/31339194/pexels-photo-31339194.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'riyadh-route': 'https://images.pexels.com/photos/27490072/pexels-photo-27490072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'dammam-route': 'https://images.pexels.com/photos/5620451/pexels-photo-5620451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
};

export function getFleetImage(key: string): string {
  return IMAGES.fleet[key as keyof typeof IMAGES.fleet] || IMAGES.fleet.sedan;
}

export function getRouteImage(key: string): string {
  return IMAGES.routes[key as keyof typeof IMAGES.routes] || IMAGES.heroKaaba;
}
