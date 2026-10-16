"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 5a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -14"}],["path",{"d":"M12 7v5l3 3"}],["path",{"d":"M4 12h1"}],["path",{"d":"M19 12h1"}],["path",{"d":"M12 19v1"}]];
const rig: Rig[] = [{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0,2,3,4],"o":[12,12],"a":0.05}];

export const Clock2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Clock2Icon.displayName = "Clock2Icon";
