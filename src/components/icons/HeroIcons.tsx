// src/components/icons/HeroIcons.tsx

import React from "react";

type IconName =
  | "userGroup"
  | "shoppingBag"
  | "dollar"
  | "menu"
  | "x"
  | "facebook"
  | "twitter"
  | "instagram"
  | "linkedin"
  | "check"
  | "star"
  | "tag"
  | "trash"
  | "update"; // Add more icon names here as you create more icons

interface HeroIconsProps extends React.SVGProps<SVGSVGElement> {
  icon: IconName;
  className?: string;
  style?: React.CSSProperties;
}

const HeroIcons = ({ icon, className, style, ...props }: HeroIconsProps) => {
  const icons: Record<IconName, JSX.Element> = {
    userGroup: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className}`}
        style={style}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    shoppingBag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
    dollar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    menu: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`${className}`}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    ),
    x: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    ),
    facebook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={style}
        {...props}
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.497v-9.294H9.691v-3.622h3.13V8.414c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.242l-1.918.001c-1.504 0-1.794.714-1.794 1.762v2.312h3.588l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    ),
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={style}
        {...props}
      >
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.95.555-2.005.959-3.127 1.184-.897-.957-2.173-1.555-3.591-1.555-2.72 0-4.925 2.205-4.925 4.923 0 .39.045.765.127 1.125C7.688 8.094 4.067 6.13 1.64 3.161c-.427.735-.666 1.587-.666 2.488 0 1.71.87 3.216 2.188 4.099-.807-.025-1.566-.247-2.229-.616v.061c0 2.386 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.622-.03-.923-.086.623 1.944 2.432 3.356 4.576 3.396-1.675 1.313-3.778 2.096-6.066 2.096-.393 0-.779-.023-1.17-.067 2.162 1.39 4.731 2.205 7.494 2.205 8.988 0 13.902-7.457 13.902-13.902 0-.21-.004-.42-.014-.63.953-.688 1.777-1.55 2.433-2.53z" />
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={style}
        {...props}
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.973.24 2.418.404a4.92 4.92 0 0 1 1.787 1.042 4.92 4.92 0 0 1 1.042 1.787c.164.445.35 1.247.404 2.418.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.973-.404 2.418a4.92 4.92 0 0 1-1.042 1.787 4.92 4.92 0 0 1-1.787 1.042c-.445.164-1.247.35-2.418.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.973-.24-2.418-.404a4.92 4.92 0 0 1-1.787-1.042 4.92 4.92 0 0 1-1.042-1.787c-.164-.445-.35-1.247-.404-2.418-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.973.404-2.418a4.92 4.92 0 0 1 1.042-1.787 4.92 4.92 0 0 1 1.787-1.042c.445-.164 1.247-.35 2.418-.404 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.741 0 8.332.013 7.052.073 5.771.132 4.865.317 4.086.545 3.252.791 2.537 1.233 1.822 1.948.947 2.823.505 3.538.259 4.372.031 5.151-.153 6.057-.212 7.338-.273 8.618-.286 9.027-.286 12s.013 3.382.073 4.662c.059 1.281.244 2.187.473 2.966.246.834.688 1.549 1.403 2.264.875.875 1.59 1.317 2.424 1.563.779.229 1.685.414 2.966.473 1.28.059 1.689.073 4.662.073s3.382-.013 4.662-.073c1.281-.059 2.187-.244 2.966-.473.834-.246 1.549-.688 2.264-1.403.875-.875 1.317-1.59 1.563-2.424.229-.779.414-1.685.473-2.966.059-1.28.073-1.689.073-4.662s-.013-3.382-.073-4.662c-.059-1.281-.244-2.187-.473-2.966a4.92 4.92 0 0 0-1.403-2.264c-.875-.875-1.59-1.317-2.424-1.563-.779-.229-1.685-.414-2.966-.473-1.28-.059-1.689-.073-4.662-.073z" />
        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.161a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z" />
      </svg>
    ),
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        style={style}
        {...props}
      >
        <path d="M22.23 0H1.77C.79 0 0 .774 0 1.725v20.55C0 23.225.79 24 1.77 24h20.46C23.21 24 24 23.225 24 22.275V1.725C24 .774 23.21 0 22.23 0zM7.06 20.452H3.56V9.028h3.5v11.424zM5.311 7.68a2.034 2.034 0 1 1 0-4.068 2.034 2.034 0 0 1 0 4.068zM20.454 20.452h-3.503v-5.832c0-1.388-.028-3.175-1.935-3.175-1.936 0-2.233 1.51-2.233 3.07v5.937H9.778V9.028h3.362v1.561h.048c.469-.89 1.615-1.83 3.325-1.83 3.555 0 4.21 2.34 4.21 5.384v6.309h-.268z" />
      </svg>
    ),
    check: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
    star: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`${className}`}
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
    tag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 6h.008v.008H6V6Z"
        />
      </svg>
    ),
    trash: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    ),
    update: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
    // Add more icons here
  };

  return icons[icon] || null;
};

export default HeroIcons;
