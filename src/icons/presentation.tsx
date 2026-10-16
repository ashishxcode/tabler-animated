"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 4l18 0"}],["path",{"d":"M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"}],["path",{"d":"M12 16l0 4"}],["path",{"d":"M9 20l6 0"}],["path",{"d":"M8 12l3 -3l2 2l3 -3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4],"o":[12,12],"st":0.08}];

export const PresentationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PresentationIcon.displayName = "PresentationIcon";
