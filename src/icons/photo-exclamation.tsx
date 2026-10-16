"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M15 21h-9a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4"}],["path",{"d":"M14 14l1 -1c.665 -.64 1.44 -.821 2.167 -.545"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4,5],"o":[16.5,17.17],"dl":0.2,"st":0.08},{"fx":"pop","n":[2],"a":0.25,"st":0.08,"os":[[9,13.17]]},{"fx":"pop","n":[0],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const PhotoExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoExclamationIcon.displayName = "PhotoExclamationIcon";
