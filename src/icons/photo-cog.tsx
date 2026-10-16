"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3"}],["path",{"d":"M14 14l1 -1c.48 -.461 1.016 -.684 1.551 -.67"}],["path",{"d":"M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19.001 15.5v1.5"}],["path",{"d":"M19.001 21v1.5"}],["path",{"d":"M22.032 17.25l-1.299 .75"}],["path",{"d":"M17.27 20l-1.3 .75"}],["path",{"d":"M15.97 17.25l1.3 .75"}],["path",{"d":"M20.733 20l1.3 .75"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4,5,6,7,8,9,10],"o":[18.02,17.41],"a":0.35,"dl":0.2},{"fx":"spin","n":[0,1,2],"o":[12,12],"a":360}];

export const PhotoCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoCogIcon.displayName = "PhotoCogIcon";
