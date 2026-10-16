"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 12h-20"}],["path",{"d":"M4 14v-8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"}],["path",{"d":"M18 20a2 2 0 0 0 2 -2"}],["path",{"d":"M4 18a2 2 0 0 0 2 2"}],["path",{"d":"M14 20l-4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,9],"a":0.06},{"fx":"pop","n":[2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,19],[5,19],[12,20]]}];

export const SquareToggleHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareToggleHorizontalIcon.displayName = "SquareToggleHorizontalIcon";
