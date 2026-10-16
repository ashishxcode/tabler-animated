"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 18v-8l-4 6h5"}],["path",{"d":"M4 6v12"}],["path",{"d":"M12 6v12"}],["path",{"d":"M11 18h2"}],["path",{"d":"M3 18h2"}],["path",{"d":"M4 12h8"}],["path",{"d":"M3 6h2"}],["path",{"d":"M11 6h2"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[8,12],"st":0.07},{"fx":"pop","n":[0,1,2],"o":[12.5,12],"a":0.04}];

export const H4Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
H4Icon.displayName = "H4Icon";
