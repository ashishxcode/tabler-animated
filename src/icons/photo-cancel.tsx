"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3"}],["path",{"d":"M14 14l1 -1c.616 -.593 1.328 -.792 2.008 -.598"}],["path",{"d":"M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M17 21l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4,5],"o":[18,17.17],"dl":0.2,"st":0.08},{"fx":"pop","n":[2],"a":0.25,"st":0.08,"os":[[8.5,13.17]]},{"fx":"pop","n":[0],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const PhotoCancelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoCancelIcon.displayName = "PhotoCancelIcon";
