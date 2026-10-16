"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.963 14.938a6.54 6.54 0 0 0 -.899 -4.06l-4.89 -7.26c-.42 -.626 -1.287 -.804 -1.936 -.398a1.376 1.376 0 0 0 -.41 .397l-1.282 1.9m-1.625 2.415l-1.986 2.946c-1.695 2.837 -1.035 6.44 1.567 8.545c2.602 2.105 6.395 2.105 8.996 0a6.83 6.83 0 0 0 1.376 -1.499"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[12,12],"dl":0.25},{"fx":"hop","n":[0],"o":[12,21],"d":[0,-1.8]}];

export const DropletOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DropletOffIcon.displayName = "DropletOffIcon";
