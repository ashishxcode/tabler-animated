"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"}],["path",{"d":"M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[18.67,14.17],"a":0.35,"dl":0.2},{"fx":"pop","n":[2],"a":0.25,"st":0.08,"os":[[9.5,13.17]]},{"fx":"pop","n":[0],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const PhotoOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoOffIcon.displayName = "PhotoOffIcon";
