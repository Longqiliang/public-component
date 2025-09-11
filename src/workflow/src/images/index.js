
import deptImg from './dept.png';
import groupImg from './group.png';
import orgImg from './org.png';
import postImg from './post.png';
import userImg from './user.png';

const defaultIconProps = {
  user: userImg,
  dept: deptImg,
  group: groupImg,
  post: postImg,
  organization: orgImg
};

export const defaultImg = userImg;

export function getImgUrl(name, defaultImg = defaultIconProps.user) {
  return (data) => {
    if (!data) {
      return;
    }

    if (data[name]) {
      return data[name];
    }

    return defaultIconProps[data.item] || defaultImg;
  };
}