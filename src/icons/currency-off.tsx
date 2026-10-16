"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.531 14.524a7 7 0 0 0 -9.06 -9.053m-2.422 1.582a7 7 0 0 0 9.903 9.896"}],["path",{"d":"M4 4l3 3"}],["path",{"d":"M20 4l-3 3"}],["path",{"d":"M4 20l3 -3"}],["path",{"d":"M20 20l-3 -3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.14}];

export const CurrencyOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CurrencyOffIcon.displayName = "CurrencyOffIcon";
