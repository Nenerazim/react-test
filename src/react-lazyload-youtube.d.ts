declare module 'react-lazyload-youtube' {
  import { ComponentType } from 'react';

  interface YoutubeProps {
    imgSize?: string;
    width?: string;
    height?: string;
    videoId?: string;
  }

  const Youtube: ComponentType<YoutubeProps>;

  export default Youtube;
}
