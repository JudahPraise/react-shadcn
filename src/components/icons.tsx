import React from "react";

export function LineCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.2s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
        </circle>
        <path
          fill="none"
          strokeDasharray="14"
          strokeDashoffset="14"
          d="M8 12L11 15L16 10"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="14;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}

export function LineError(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
        <path
          fill="currentColor"
          fillOpacity="0"
          strokeDasharray="60"
          strokeDashoffset="60"
          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="60;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.8s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
        </path>
        <path
          fill="none"
          strokeDasharray="8"
          strokeDashoffset="8"
          d="M12 12L16 16M12 12L8 8M12 12L8 16M12 12L16 8"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
export function LineWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="60"
          strokeDashoffset="60"
          d="M12 3L21 20H3L12 3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="60;0"
          ></animate>
        </path>
        <path strokeDasharray="6" strokeDashoffset="6" d="M12 10V14">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="6;0"
          ></animate>
        </path>
      </g>
      <circle cx="12" cy="17" r="1" fill="currentColor" fillOpacity="0">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.8s"
          dur="0.4s"
          values="0;1"
        ></animate>
      </circle>
    </svg>
  );
}

export function LineInfo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="2">
        <path
          fill="currentColor"
          fillOpacity="0"
          strokeDasharray="60"
          strokeDashoffset="60"
          d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="60;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.2s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
        </path>
        <path fill="none" strokeDasharray="8" strokeDashoffset="8" d="M12 7V13">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
      </g>
      <circle cx="12" cy="17" r="1" fill="currentColor" fillOpacity="0">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.8s"
          dur="0.4s"
          values="0;1"
        ></animate>
      </circle>
    </svg>
  );
}

export function Spinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="3" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale0"
          fill="freeze"
          attributeName="r"
          begin="0;svgSpinners6DotsScale2.end-0.5s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="16.5" cy="4.21" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale1"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale0.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="7.5" cy="4.21" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale2"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale4.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="19.79" cy="7.5" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale3"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale1.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="4.21" cy="7.5" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale4"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale6.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="21" cy="12" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale5"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale3.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="3" cy="12" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale6"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale8.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="19.79" cy="16.5" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale7"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale5.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="4.21" cy="16.5" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale8"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScalea.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="16.5" cy="19.79" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScale9"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale7.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="7.5" cy="19.79" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScalea"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScaleb.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
      <circle cx="12" cy="21" r="0" fill="currentColor">
        <animate
          id="svgSpinners6DotsScaleb"
          fill="freeze"
          attributeName="r"
          begin="svgSpinners6DotsScale9.begin+0.1s"
          calcMode="spline"
          dur="0.6s"
          keySplines="0,1,0,1;.53,0,.61,.73"
          keyTimes="0;.2;1"
          values="0;2;0"
        ></animate>
      </circle>
    </svg>
  );
}
