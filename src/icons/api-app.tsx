"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5"}],["path",{"d":"M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5"}],["path",{"d":"M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5"}],["path",{"d":"M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3],"o":[12,12],"st":0.1}];

export const ApiAppIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ApiAppIcon.displayName = "ApiAppIcon";
