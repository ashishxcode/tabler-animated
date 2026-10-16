"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 18h5"}],["path",{"d":"M14 18h4"}],["path",{"d":"M15 7h.01"}],["path",{"d":"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12"}],["path",{"d":"M3 15l5 -5c.928 -.893 2.072 -.893 3 0l5 5"}],["path",{"d":"M14 13l1 -1c.928 -.893 2.072 -.893 3 0l3 3"}],["path",{"d":"M3 15h18"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5,6],"a":0.25,"st":0.08,"os":[[9.5,12.17],[17.5,13.17],[12,15]]},{"fx":"pop","n":[0,1,2],"o":[12,12.5],"a":0.35,"dl":0.12},{"fx":"tilt","n":[3],"o":[12,12],"a":-3}];

export const PhotoAltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoAltIcon.displayName = "PhotoAltIcon";
