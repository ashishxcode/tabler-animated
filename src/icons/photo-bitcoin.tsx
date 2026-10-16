"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5"}],["path",{"d":"M15 8h.01"}],["path",{"d":"M13 21h-7a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2.5 2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"a":0.25,"st":0.08,"os":[[18.5,18],[8.25,13.17]]},{"fx":"pop","n":[1],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[2],"o":[12,12],"a":-3}];

export const PhotoBitcoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoBitcoinIcon.displayName = "PhotoBitcoinIcon";
