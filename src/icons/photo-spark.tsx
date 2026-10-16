"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.993 3.993"}],["path",{"d":"M14 14l1 -1c.47 -.452 .995 -.675 1.52 -.67"}],["path",{"d":"M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[15.26,13.16],"a":0.35,"dl":0.2},{"fx":"pop","n":[2,4],"a":0.25,"st":0.08,"os":[[9,13.17],[19,19]]},{"fx":"pop","n":[0],"o":[15.01,8],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const PhotoSparkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoSparkIcon.displayName = "PhotoSparkIcon";
