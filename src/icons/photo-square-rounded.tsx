"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9"}],["path",{"d":"M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5"}],["path",{"d":"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"a":0.25,"st":0.08,"os":[[9.75,13.17],[17.25,13.92]]},{"fx":"pop","n":[0],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const PhotoSquareRoundedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoSquareRoundedIcon.displayName = "PhotoSquareRoundedIcon";
