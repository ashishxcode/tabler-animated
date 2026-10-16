"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 15h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3"}],["path",{"d":"M9 12a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3l0 -6"}],["path",{"d":"M3 12l2.296 -2.296a2.41 2.41 0 0 1 3.408 0l.296 .296"}],["path",{"d":"M14 13.5v3l2.5 -1.5l-2.5 -1.5"}],["path",{"d":"M7 6v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"a":0.25,"st":0.08,"os":[[6,10.5]]},{"fx":"pop","n":[3,4],"o":[11.75,11.25],"a":0.35,"dl":0.12},{"fx":"tilt","n":[0,1],"o":[12,12],"a":-3}];

export const PhotoVideoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoVideoIcon.displayName = "PhotoVideoIcon";
