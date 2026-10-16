"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M10 21h-4a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5"}],["path",{"d":"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1 1"}],["path",{"d":"M14 21v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M14 19h4"}],["path",{"d":"M21 15v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"a":0.25,"st":0.08,"os":[[7.5,13.17],[16,18]]},{"fx":"pop","n":[0,4,5],"o":[17.5,14.5],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[12,12],"a":-3}];

export const PhotoAiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoAiIcon.displayName = "PhotoAiIcon";
