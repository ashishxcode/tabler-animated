"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5"}],["path",{"d":"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2"}],["path",{"d":"M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"a":0.25,"st":0.08,"os":[[10,13.17],[17,13.67]]},{"fx":"pop","n":[0],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[3],"o":[12,12],"a":-3}];

export const PhotoCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoCircleIcon.displayName = "PhotoCircleIcon";
