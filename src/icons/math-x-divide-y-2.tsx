"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21l18 -18"}],["path",{"d":"M15 14l3 4.5"}],["path",{"d":"M21 14l-4.5 7"}],["path",{"d":"M3 4l6 6"}],["path",{"d":"M3 10l6 -6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[18,17.5],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,7],[6,7]]}];

export const MathXDivideY2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathXDivideY2Icon.displayName = "MathXDivideY2Icon";
