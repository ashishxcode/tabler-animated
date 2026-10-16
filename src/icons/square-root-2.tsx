"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1"}],["path",{"d":"M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5"}],["path",{"d":"M3 12h1l3 8l3 -16h10"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[11.5,12],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[16,15.5],[16,15.5]]}];

export const SquareRoot2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareRoot2Icon.displayName = "SquareRoot2Icon";
