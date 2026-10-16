"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"}],["path",{"d":"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"a":0.25,"st":0.08,"os":[[9.5,13.17],[17.5,14.17]]},{"fx":"pop","n":[0],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const PhotoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoIcon.displayName = "PhotoIcon";
