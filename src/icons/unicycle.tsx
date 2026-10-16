"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 16a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M12 16v-11"}],["path",{"d":"M8 3q 2 2 7 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,13],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.5,4]]}];

export const UnicycleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UnicycleIcon.displayName = "UnicycleIcon";
