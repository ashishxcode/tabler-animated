"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 15h-4v6h4v-6"}],["path",{"d":"M12 15v-4"}],["path",{"d":"M8 21h8"}],["path",{"d":"M19 3v8h-14v-8"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,7],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,18],[12,13],[12,21]]}];

export const RugbyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RugbyIcon.displayName = "RugbyIcon";
