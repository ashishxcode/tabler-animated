"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.5 3.5"}],["path",{"d":"M14 14l1 -1c.679 -.653 1.473 -.829 2.214 -.526"}],["path",{"d":"M19 22v-6"}],["path",{"d":"M22 19l-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,5],"a":0.25,"st":0.08,"os":[[8.75,13.17],[19,17.5]]},{"fx":"pop","n":[0,3,4],"o":[16.5,15],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const PhotoUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoUpIcon.displayName = "PhotoUpIcon";
