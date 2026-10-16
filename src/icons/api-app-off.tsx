"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5"}],["path",{"d":"M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5"}],["path",{"d":"M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5"}],["path",{"d":"M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12.5,18],"a":0.35,"dl":0.2},{"fx":"draw","n":[0,2,3],"o":[12,9],"st":0.1}];

export const ApiAppOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ApiAppOffIcon.displayName = "ApiAppOffIcon";
