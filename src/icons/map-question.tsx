"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v7.5"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v5.5"}],["path",{"d":"M19 22v.01"}],["path",{"d":"M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19.25,18.51],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1,2],"o":[12,20],"d":[0,-2.2]}];

export const MapQuestionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapQuestionIcon.displayName = "MapQuestionIcon";
