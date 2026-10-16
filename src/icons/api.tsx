"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 13h5"}],["path",{"d":"M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3"}],["path",{"d":"M20 8v8"}],["path",{"d":"M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3],"o":[12,12],"st":0.1}];

export const ApiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ApiIcon.displayName = "ApiIcon";
